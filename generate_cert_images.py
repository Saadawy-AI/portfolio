from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

base = Path('src/assets/certificates')
base.mkdir(parents=True, exist_ok=True)

logos = [
    ('depi', '#07131f', '#22d3ee', 'DEPI', 'Digital Egypt', 'Pioneers Initiative'),
    ('nti', '#0f172a', '#8b5cf6', 'NTI', 'National Telecommunication', 'Institute'),
    ('gdg', '#0b1220', '#22c55e', 'GDG', 'Google Developer Groups', 'On Campus'),
    ('mnu', '#111827', '#f59e0b', 'MNU', 'Modern University', 'for Technology & Information'),
]

for name, bg, accent, title, line1, line2 in logos:
    img = Image.new('RGBA', (800, 480), bg)
    draw = ImageDraw.Draw(img)
    fill = '#0f172a' if name != 'mnu' else '#1f2937'
    draw.rounded_rectangle((40, 40, 760, 440), radius=28, fill=fill, outline=accent, width=6)
    draw.ellipse((120, 120, 360, 360), fill=accent)
    draw.line((240, 140, 240, 340), fill=accent, width=24)
    draw.line((180, 240, 300, 240), fill='white', width=24)

    try:
        font_title = ImageFont.truetype('arial.ttf', 70)
        font_sub = ImageFont.truetype('arial.ttf', 30)
    except Exception:
        font_title = ImageFont.load_default()
        font_sub = ImageFont.load_default()

    draw.text((410, 165), title, fill='white', font=font_title)
    draw.text((410, 255), line1, fill=accent, font=font_sub)
    draw.text((410, 300), line2, fill=accent, font=font_sub)

    img.save(base / f'{name}.png')
    print(f'Created {base / f"{name}.png"}')
