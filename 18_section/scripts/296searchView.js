// 296. Implementing Search Results - Part 1

class SearchView {
    #parentElement = document.querySelector('.search');

    getQuery() {
        // return this.#parentElement.querySelector('.search__field').value;
        const query = this.#parentElement.querySelector('.search__field').value;
        this.#clearInput();
        return query;
    };

    #clearInput() {
        this.#parentElement.querySelector('.search__field').value = '';
    };

    addHandlerSearch(handler) {
        this.#parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    };
};

export default new SearchView();