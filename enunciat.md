# Prova 1 (10/11/2025)

1. (2p)
   1. Alça el contenidor mysql.
   2. Comprova que tot funciona com cal.
   3. Fes les modificacions pertinents per a que l'arxiu docker-compose.yml no continga credencials.
2. (3p) Implementar l’API d’usuaris
   1. GET /api/users: retorna id, username i role dels usuaris.
   2. POST /api/users: rep JSON amb username, password i role (user per defecte).
   3. Comprova els endpoints.
3. (3p) Afegir middleware d’autorització al GET d’usuaris:
   1. Crea un middleware requireAdmin que:
      * Llegisca credencials de la petició.
      * Comprove a la BD que username i password existeixen i que el role és admin.
      * Denegue l’accés si no es compleix (respostes 401 o 403 segons corresponga).
4. (2p) Si ens feren injecció d'SQL sobre la nostra base de dades podrien obtindre les credencials i accedir a l'endpoint desitjat.
   1. Saps com mitigar-ho? Explica-ho.
   2. Implementa-ho.
