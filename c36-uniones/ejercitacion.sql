USE movies_db;

SELECT title AS titulo, genres.name AS genero
FROM series
INNER JOIN genres ON series.genre_id = genres.id;

SELECT episodes.title, actors.first_name, actors.last_name
FROM actors
INNER JOIN actor_episode ON actor_episode.actor_id = actors.id
INNER JOIN episodes ON actor_episode.episode_id = episodes.id;

SELECT DISTINCT first_name, last_name
FROM actors
INNER JOIN actor_movie ON actor_movie.actor_id = actors.id
INNER JOIN movies ON actor_movie.movie_id = movies.id
WHERE movies.title LIKE "%La Guerra de las galaxias%";

SELECT title AS titulo, COALESCE(genres.name, "No tiene género") AS genero
FROM movies
LEFT JOIN genres ON movies.genre_id = genres.id;

SELECT title AS titulo, CONCAT(datediff(end_date, release_date), " días") AS duracion FROM series;

SELECT first_name FROM actors
WHERE LENGTH(first_name) > 6
ORDER BY first_name;

SELECT COUNT(*) AS "cantidad de episodios"
FROM episodes;

SELECT series.title, COUNT(*) AS temporadas FROM series
INNER JOIN seasons ON seasons.serie_id = series.id
GROUP BY title;

SELECT genres.name AS genero, COUNT(*) AS cantidad FROM movies
INNER JOIN genres ON movies.genre_id = genres.id
GROUP BY genres.name
HAVING cantidad >= 3;