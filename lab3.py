import base64
import string
import secrets

# Zad 1
def base64_encode(text: str) -> str:
    return base64.b64encode(text.encode()).decode()

# Zad 2
def generate_password() -> str:
    base_token = secrets.token_urlsafe(16)

    l_letters=list(string.ascii_lowercase)
    u_letters=list(string.ascii_uppercase)
    numbers=list(str(x) for x in range(10))
    special=list('[@_!#$%^&*()<>?}{~:]')

    for x in l_letters, u_letters, numbers, special:
        base_token += secrets.choice(x)

    return base_token


zad1_tekst="Mój piękny tekst"
zad1_tekst_kodowany=base64_encode(zad1_tekst)
zad1_tekst_dekodowany=str(base64.b64decode(zad1_tekst_kodowany.encode()).decode())

print("Zad1:", zad1_tekst_kodowany)
print("Zad1-spr:", zad1_tekst_dekodowany)

print("Zad2:", generate_password())

