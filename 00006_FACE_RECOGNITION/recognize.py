import face_recognition
import json
import sys

image = face_recognition.load_image_file(sys.argv[1])
face_encoding = face_recognition.face_encodings(image)[0]
print(json.dumps(face_encoding.tolist()))
