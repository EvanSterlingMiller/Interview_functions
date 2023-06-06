def camel_case(string):
    words = string.split()
    return words[0].lower() + ''.join(word.capitalize() for word in words[1:])

print(camel_case("hello World everyone"))