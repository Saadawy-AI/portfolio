from pathlib import Path
import fitz
base = Path('temp-certificates')
out = Path('src/assets/certificates')
out.mkdir(parents=True, exist_ok=True)
files = [
    ('02_DEPI_Microsoft_Data_Engineer_Certificate_of_Achievement.pdf', 'depi-achievement.png'),
    ('04_Build_with_AI_GDG_Certificate.pdf', 'gdg-ai.png'),
    ('05_Mahara_Tech_Clean_Code_Certificate.pdf', 'clean-code.png'),
    ('06_Edraak_Microsoft_Office_365.pdf', 'office365.png'),
]
for src_name, dst_name in files:
    src = base / src_name
    dst = out / dst_name
    if not src.exists():
        print('missing', src)
        continue
    doc = fitz.open(src)
    page = doc.load_page(0)
    mat = fitz.Matrix(2, 2)
    pix = page.get_pixmap(matrix=mat, alpha=False)
    pix.save(dst)
    print('saved', dst)
