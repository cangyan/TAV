import matplotlib.pyplot as plt
import numpy as np
import math

x = np.arange(0, 10, 0.1)

y = 2**x

plt.title("指数函数")
plt.plot(x, y)
plt.show()
