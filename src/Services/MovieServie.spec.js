import MovieService from './MovieService';

describe('[MovieServie] Start Service Test', () => {
    it('getMovieGenres() Should return an array', () => {
        expect.assertions(1);
        return expect(MovieService.getMovieGenres().then(data => Array.isArray(data))).resolves.toBe(true);
    });

    it('getMovieGenres() Should return an object', () => {
        expect.assertions(1);
        return expect(MovieService.getMoviesByGenres(12).then(data => typeof data)).resolves.toBe('object');
    });

    it('getMovies() Should return an object with certain structure', () => {
        expect.assertions(12);
        return MovieService.getMovies().then(data => {
            expect(data.hasOwnProperty('page')).toBe(true);
            expect(data.hasOwnProperty('total_pages')).toBe(true);
            expect(data.hasOwnProperty('total_results')).toBe(true);
            expect(data.hasOwnProperty('results')).toBe(true);
            const movie = data.results[0];
            expect(movie.hasOwnProperty('title')).toBe(true);
            expect(movie.hasOwnProperty('release_date')).toBe(true);
            expect(movie.hasOwnProperty('genre_ids')).toBe(true);
            expect(movie.hasOwnProperty('poster_path')).toBe(true);
            expect(movie.hasOwnProperty('overview')).toBe(true);
            expect(movie.hasOwnProperty('vote_average')).toBe(true);
            expect(movie.hasOwnProperty('vote_count')).toBe(true);
            expect(movie.hasOwnProperty('id')).toBe(true);
        });
    });

    it('searchMovies() Should return an object', () => {
        expect.assertions(1);
        return expect(MovieService.searchMovies('alien').then(data => typeof data)).resolves.toBe('object');
    });
})