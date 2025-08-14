x = [0, 0]    # entradas (features)
w = [2, 4]    # pesos aplicados a cada entrada
bias = -1     # valor que desloca o limiar de ativação


# Função perceptron
def perceptron(x, w, bias):
    soma = -1
    for i in range(len(x)):
        soma += x[i] * w[i]

    soma += bias
    if soma > 0:
        return True
    else:
        return False

# Função principal
def main():
    print("t=0 f=0 c= " + str(perceptron([0, 0], w, bias)))
    print("t=1 f=0 c= " + str(perceptron([1, 0], w, bias)))
    print("t=0 f=1 c= " + str(perceptron([0, 1], w, bias)))
    print("t=1 f=1 c= " + str(perceptron([1, 1], w, bias)))

main()