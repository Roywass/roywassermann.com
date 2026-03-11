import sys
import subprocess
try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "requests", "beautifulsoup4"])
    import requests
    from bs4 import BeautifulSoup

import json

urls = {
    "BA1": [
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=2046270943&ww_x_anneeAcad=2024-2025&ww_i_section=249847",
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=1772095&ww_x_anneeAcad=2024-2025&ww_i_section=249847",
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=2952439284&ww_x_anneeAcad=2024-2025&ww_i_section=249847",
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=784637359&ww_x_anneeAcad=2024-2025&ww_i_section=249847",
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=4084549473&ww_x_anneeAcad=2024-2025&ww_i_section=249847",
    ],
    "BA2": [
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=2046271051&ww_x_anneeAcad=2024-2025&ww_i_section=249847",
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=1705597&ww_x_anneeAcad=2024-2025&ww_i_section=249847",
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=3951003742&ww_x_anneeAcad=2024-2025&ww_i_section=1751774",
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=3506410566&ww_x_anneeAcad=2024-2025&ww_i_section=249847",
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=1677965677&ww_x_anneeAcad=2024-2025&ww_i_section=249847"
    ],
    "BA4": [
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=3522730059&ww_x_anneeAcad=2025-2026&ww_i_section=249847",
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=2555884007&ww_x_anneeAcad=2025-2026&ww_i_section=249847",
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=3517179064&ww_x_anneeAcad=2025-2026&ww_i_section=249847",
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=3922867406&ww_x_anneeAcad=2025-2026&ww_i_section=1751774",
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=1934610873&ww_x_anneeAcad=2025-2026&ww_i_section=249847",
        "https://isa.epfl.ch/imoniteur_ISAP/!itffichecours.htm?ww_i_matiere=3517707471&ww_x_anneeAcad=2025-2026&ww_i_section=249847"
    ]
}

data = []

for sem, sem_urls in urls.items():
    for url in sem_urls:
        try:
            r = requests.get(url, timeout=10)
            r.encoding = 'utf-8' # EPFL uses utf-8 usually, or iso
            soup = BeautifulSoup(r.text, 'html.parser')
            
            # The English version can be linked. But often EPFL titles are inherently multilingual or we can just translate with LLM.
            h1 = soup.find('h1')
            title = h1.text.strip() if h1 else "Unknown"
            
            # Remove scripts and styles
            for script in soup(["script", "style"]):
                script.decompose()
            
            texts = list(soup.stripped_strings)
            
            full_text = " \\n".join(texts)
            
            course_info = {
                "semester": sem,
                "title": title,
                "text": full_text[:4000] # Should be enough to capture the code, credits, summary and topics
            }
            data.append(course_info)
        except Exception as e:
            print(f"Error fetching {url}: {e}")

with open("/tmp/courses.json", "w") as f:
    json.dump(data, f, indent=2)

print(f"Extracted {len(data)} courses successfully.")
