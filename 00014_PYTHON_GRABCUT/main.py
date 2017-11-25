import cv2
import numpy as np

fname = 'images/test1.jpg'
img = cv2.imread(fname)
rect = (275, 120, 170, 320)

mask = np.zeros(img.shape[:2], np.uint8)
bgModel = np.zeros((1,65), np.float64)
fgModel = np.zeros((1,65), np.float64)
cv2.grabCut(img, mask, rect, bgModel, fgModel, 5, cv2.GC_INIT_WITH_RECT)
mask2 = np.where((mask == 2) | (mask == 0), 0, 1).astype(np.uint8)

out = img * mask2[:, :, np.newaxis]

cv2.imshow('output', out)
cv2.waitKey()
