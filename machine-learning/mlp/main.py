from sklearn.datasets import load_iris  # Corrigido: 'skilearn' -> 'sklearn'
from sklearn.model_selection import train_test_split  # Divisão conjunto treino e teste
from sklearn.metrics import accuracy_score  # Avaliação do algoritmo
from sklearn.neural_network import MLPClassifier  # Rede neural artificial

# Carrega o dataset Iris
iris = load_iris()  # target: (0=setosa, 1=versicolor, 2=virginica)

# Mostra os dados
print("Features (X):")
print(iris.data[:150])  # Pode ser só iris.data, já que o dataset tem 150 amostras

print("\nTarget (y):")
print(iris.target[:150])  # Corrigido: estava mostrando os dados de novo ao invés dos targets

# Define X e y
X, y = iris.data, iris.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Inicializa o classificador MLP
mlp = MLPClassifier(hidden_layer_sizes=(10,), max_iter=1000, random_state=42)

# Treina o modelo
mlp.fit(X_train, y_train)

# Faz previsões
y_pred = mlp.predict(X_test)

# Avalia o modelo
acc = accuracy_score(y_test, y_pred)
print(f"\nAcurácia do modelo: {acc}")
