class Airport {
    constructor($sce) {
        'ngInject';

        this._$sce = $sce;
    }

    $onInit() {
        this._highlightedPattern = '<span class="highlighted">$&</span>';
    }

    $onChanges() {
        this._filterRegex = new RegExp(this.filter, 'gi');
    }

    parseByFilter(text) {
        if (!this.filter) {
            return this._$sce.trustAsHtml(text);
        }

        return this._$sce.trustAsHtml(this._getParsedText(text));
    } 

    _getParsedText(text) {
        return text.replace(this._filterRegex, this._highlightedPattern);
    }
}

export default Airport