import matplotlib.pyplot as plt
import numpy as np
import math

x = np.arange(0, 10, 0.1)

e = math.e

y = e**x

plt.title("自然对数函数")
plt.plot(x, y)
plt.show()


