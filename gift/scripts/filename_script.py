import glob
import json
files = glob.glob('images/*.JPG')
print(files)
outfile = open('imglist.json', 'w')
json.dump(files, outfile)
outfile.close()