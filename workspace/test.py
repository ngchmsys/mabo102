from . import service

def DFS(n):
    if n < 2:
        return 1
    return  n + DFS(n-1)


if __name__ == '__main__':
    print(DFS(3))