def cap(thingy):
    woord = ''
    for i in range(0, len(thingy)):
        if i % 2 == 0:
            woord += thingy[i].upper()
        else:
            woord += thingy[i]
    
    return print(woord)

cap('hel#lo')


