def find(names,query):
    copy = names[:]
    names = [name.split() for name in names]
    res = []
    def dfs(wordIndex,query):
        flag = False
        if query[0]=='#':
            flag = True
            query = query[1:]

        if not query and len(names[wordIndex])<=1:
            res.append(copy[wordIndex])
            return
        if query[0]==names[wordIndex][0][0]:
            names[wordIndex][0] = names[wordIndex][0][1:]
            dfs(wordIndex,'#'+query[1:])
            names[wordIndex][0] = query[0]+names[wordIndex][0]
        elif not flag:
            return 

        if len(names[wordIndex]) > 1:
            tmp = names[wordIndex].pop(0)
            dfs(wordIndex,query)
            names[wordIndex].insert(0,tmp)
        return

    for i in range(len(names)):
        dfs(i,query)
    
    return res

print(find(['zhang san','zhang han san','wei zhan san'],'zhs'))

