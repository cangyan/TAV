import matplotlib.pyplot as plt
import numpy as np

x = np.arange(-10, 10, 0.1)

y = x**2 + 2*x + 1

plt.title("一元二次函数")
plt.plot(x, y)
plt.show()
