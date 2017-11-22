import codecs
import csv

csv_filename = '/tmp/hoge.csv'

with open(csv_filename, 'wb') as f:
    f.write(codecs.BOM_UTF16_LE)

with codecs.open(csv_filename, 'ab', encoding = 'utf-16-le', errors = 'replace') as f:
    tsv = csv.writer(f, delimiter='\t')
    tsv.writerows(
        [
            ['aa', 'bb', 'cc'],
            ['xx', 'yy', 'zz'],
            ['这是', '测试', '中文', '行']
        ]
    )
