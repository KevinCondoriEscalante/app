<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>List</title>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>TITULO</th>
                <th>AUTOR</th>
            </tr>
        </thead>
        <tbody>
            <% results.forEach((libro) => { %>
            <tr>
                    
                    <td><%= libro.id %></td>
                    <td><%= libro.titulo %></td>
                    <td><%= libro.autor %></td>

            </tr>
            <% }) %>
        </tbody>
        <a href="/create">Registrar</a>
    </table>
</body>
</html>
