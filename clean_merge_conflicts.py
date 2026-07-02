from pathlib import Path

root = Path('src')
unresolved = []

for path in sorted(root.rglob('*.*')):
    if path.suffix.lower() not in {'.js', '.jsx', '.ts', '.tsx'}:
        continue
    text = path.read_text(encoding='utf-8')
    if '<<<<<<<' not in text:
        continue

    output = []
    i = 0
    changed = False
    file_ok = True

    while True:
        start = text.find('<<<<<<<', i)
        if start == -1:
            output.append(text[i:])
            break

        output.append(text[i:start])
        mid = text.find('=======', start)
        end = text.find('>>>>>>>', mid)
        if mid == -1 or end == -1:
            print(f'Unterminated conflict in {path}')
            file_ok = False
            break

        left = text[start + len('<<<<<<<'):mid]
        right = text[mid + len('======='):end]

        def normalize_block(block):
            lines = block.splitlines()
            # remove label lines such as HEAD or branch names
            if lines and lines[0].strip().startswith('HEAD'):
                lines = lines[1:]
            if lines and lines[0].strip().startswith('ff'):
                lines = lines[1:]
            # remove any leading or trailing empty lines
            while lines and lines[0].strip() == '':
                lines.pop(0)
            while lines and lines[-1].strip() == '':
                lines.pop()
            return [line.rstrip() for line in lines]

        left_norm = normalize_block(left)
        right_norm = normalize_block(right)

        if left_norm == right_norm:
            output.append('\n'.join(left_norm) + '\n')
            changed = True
            i = end + len('>>>>>>>')
            continue

        unresolved.append(path)
        print(f'UNRESOLVED CONFLICT in {path}')
        print('--- LEFT ---')
        print('\n'.join(left_norm[:20]))
        print('--- RIGHT ---')
        print('\n'.join(right_norm[:20]))
        print('------------------')
        file_ok = False
        break

    if changed and file_ok:
        path.write_text(''.join(output), encoding='utf-8')
        print(f'Cleaned {path}')

if unresolved:
    print(f'Finished with {len(unresolved)} unresolved file(s).')
    raise SystemExit(1)
else:
    print('All conflicts cleaned.')
