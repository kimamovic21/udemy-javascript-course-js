// 297. Implementing Search Results - Part 2

class SearchView {
    _parentElement = document.querySelector('.search');

    getQuery() {
        // return this.#parentElement.querySelector('.search__field').value;
        const query = this._parentElement.querySelector('.search__field').value;
        this._clearInput();
        return query;
    };

    _clearInput() {
        this._parentElement.querySelector('.search__field').value = '';
    };

    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    };
};

export default new SearchView();