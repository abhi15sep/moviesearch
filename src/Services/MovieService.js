import themoviedb from 'Libs/themoviedb';

export default {
	/**
	 * Fetch movie genres
	 */
	getMovieGenres: () => {
		return new Promise((resolve, reject) => {
			themoviedb.genres.getMovieList({}, (data) => resolve(JSON.parse(data).genres),
				(error) => {
					console.error(error);
					reject(error);
				})
		})
	},

	/**
	 * @param id Get movies by genres Id
	 * @param page Jump to page
	 */
	getMoviesByGenres: (id, page = 1) => {
		return new Promise((resolve, reject) => {
			themoviedb.genres.getMovies({ id, page }, (data) => resolve(JSON.parse(data)),
				(error) => {
					console.error(error);
					reject(error);
				})
		})
	},

	/**
	 * @param page Jump to page
	 */
	getMovies: (page = 1) => {
		return new Promise((resolve, reject) => {
			themoviedb.discover.getMovies({ page }, (data) => resolve(JSON.parse(data)),
				(error) => {
					console.error(error);
					reject(error);
				})
		})
	},

	/**
	 * @param keywords Search movies by keywords
	 * @param page Jump to page
	 */
	searchMovies: (keywords, page = 1) => {
		return new Promise((resolve, reject) => {
			const queryObj = (keywords && { query: keywords, page }) || {};
			themoviedb.search.getMovie(queryObj, (data) => {
				return resolve(JSON.parse(data));
			},
				(error) => {
					console.error(error);
					reject(error);
				})
		})
	},
}