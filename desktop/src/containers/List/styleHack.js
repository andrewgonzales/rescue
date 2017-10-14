const styleText = `/*editor error animate*/
/*@import "~toastr/build/toastr.min.css";*/

.react-bs-table-container .react-bs-table-search-form {
  margin-bottom: 0;
}

.react-bs-table-bordered {
  border: 1px solid #ddd;
  border-radius: 5px;
}

.react-bs-table table {
  margin-bottom: 0;
  table-layout: fixed;
}

.react-bs-table table td,
.react-bs-table table th {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.react-bs-table-pagination {
  margin-top: 10px;
}

.react-bs-table-tool-bar {
  margin-bottom: 5px;
}

.react-bs-container-header {
  overflow: hidden;
  width: 100%;
}

.react-bs-container-body {
  /*height: 154px;*/
  overflow: auto;
  width: 100%;
}

.react-bootstrap-table-page-btns-ul {
  float: right;
  /* override the margin-top defined in .pagination class in bootstrap. */
  margin-top: 0;
}

.react-bs-table .table-bordered {
    border: 0;
    outline: none !important;
}

.react-bs-table .table-bordered > thead > tr > th,
.react-bs-table .table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}

.react-bs-table .table-bordered > tbody > tr > td {
  outline: none !important;
}

.react-bs-table .table-bordered > tbody > tr > td.default-focus-cell {
  outline: 3px solid cornflowerblue !important;
  outline-offset: -1px;
}

.react-bs-table .table-bordered > tfoot > tr > th,
.react-bs-table .table-bordered > tfoot > tr > td {
  border-top-width: 2px;
}

.react-bs-table .table-bordered > tfoot > tr > th,
.react-bs-table .table-bordered > tfoot > tr > td {
  border-bottom-width: 0;
}

/*Esquerda*/
.react-bs-table .table-bordered > thead > tr > th:first-child,
.react-bs-table .table-bordered > tbody > tr > th:first-child,
.react-bs-table .table-bordered > tfoot > tr > th:first-child,
.react-bs-table .table-bordered > thead > tr > td:first-child,
.react-bs-table .table-bordered > tbody > tr > td:first-child,
.react-bs-table .table-bordered > tfoot > tr > td:first-child {
  border-left-width: 0;
}

/*Direita*/
.react-bs-table .table-bordered > thead > tr > th:last-child,
.react-bs-table .table-bordered > tbody > tr > th:last-child,
.react-bs-table .table-bordered > tfoot > tr > th:last-child,
.react-bs-table .table-bordered > thead > tr > td:last-child,
.react-bs-table .table-bordered > tbody > tr > td:last-child,
.react-bs-table .table-bordered > tfoot > tr > td:last-child {
  border-right-width: 0;
}

/*Topo*/
.react-bs-table .table-bordered > thead > tr:first-child > th,
.react-bs-table .table-bordered > thead > tr:first-child > td {
  border-top-width: 0;
}

/*Baixo*/
.react-bs-table .table-bordered > tfoot > tr:last-child > th,
.react-bs-table .table-bordered > tfoot > tr:last-child > td {
  border-bottom-width: 0;
}

.react-bs-table .react-bs-container-header > table > thead > tr > th {
  vertical-align: middle;
}

.react-bs-table .react-bs-container-header > table > thead > tr > th .filter{
  font-weight: normal;
}

.react-bs-table .react-bs-container-header > table > thead > tr > th .select-filter option[value=''],
.react-bs-table .react-bs-container-header > table > thead > tr > th .select-filter.placeholder-selected,
.react-bs-table .react-bs-container-header > table > thead > tr > th .filter::-webkit-input-placeholder,
.react-bs-table .react-bs-container-header > table > thead > tr > th .number-filter-input::-webkit-input-placeholder{
  color: lightgrey;
  font-style: italic;
}

.react-bs-table .react-bs-container-header > table > thead > tr > th .select-filter.placeholder-selected option:not([value='']) {
  color: initial;
  font-style: initial;
}

.react-bs-table .react-bs-container-header > table > thead > tr > th .number-filter,
.react-bs-table .react-bs-container-header > table > thead > tr > th .date-filter {
  display: flex;
}

.react-bs-table .react-bs-container-header > table > thead > tr > th .number-filter-input,
.react-bs-table .react-bs-container-header > table > thead > tr > th .date-filter-input {
  margin-left: 5px;
  float: left;
  width: calc(100% - 67px - 5px);
}

.react-bs-table .react-bs-container-header > table > thead > tr > th .number-filter-comparator,
.react-bs-table .react-bs-container-header > table > thead > tr > th .date-filter-comparator {
  width: 67px;
  float: left;
}

.react-bs-table .react-bs-container-header .sort-column {
  cursor: pointer;
}

/*inline editor default style*/
.react-bs-container .form-control.editor{
  /*width:100%;
  top:0;
  left:0;*/
  /*height: 100%;
  position: absolute;*/
}

.react-bs-container  .textarea-save-btn{
  position: absolute;
  z-index: 100;
  right: 0;
  top: -21px;
}

.react-bs-table-no-data {
  text-align: center;
}


.ReactModal__Overlay {
  -webkit-perspective: 600;
  perspective: 600;
  opacity: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 101;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
  transition: opacity 150ms ease-out;
}

.ReactModal__Content {
  -webkit-transform: scale(0.5) rotateX(-30deg);
  transform: scale(0.5) rotateX(-30deg);
}

.ReactModal__Content--after-open {
  -webkit-transform: scale(1) rotateX(0deg);
  transform: scale(1) rotateX(0deg);
  transition: all 150ms ease-in;
}

.ReactModal__Overlay--before-close {
  opacity: 0;
}

.ReactModal__Content--before-close {
  -webkit-transform: scale(0.5) rotateX(30deg);
  transform: scale(0.5) rotateX(30deg);
  transition: all 150ms ease-in;
}

.ReactModal__Content.modal-dialog {
  border: none;
  background-color: transparent;
}

/*error tip style*/
.animated {
  animation-fill-mode: both;
}

.animated.bounceIn,
.animated.bounceOut{
  animation-duration: .75s;
}

.animated.shake{
  animation-duration: .3s;
}

td.react-bs-table-expand-cell {
    cursor: pointer;
}

@keyframes shake {
  from, to {
    transform: translate3d(0, 0, 0);
  }

  10%,  50%,  90% {
    transform: translate3d(-10px, 0, 0);
  }

  30%, 70%{
    transform: translate3d(10px, 0, 0);
  }
}

.shake {
  animation-name: shake;
}

@keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(.97, .97, .97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

.bounceIn {
  animation-name: bounceIn;
}

@keyframes bounceOut {
  20% {
    transform: scale3d(.9, .9, .9);
  }

  50%, 55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
}

.bounceOut {
  animation-name: bounceOut;
}
`;

module.exports = styleText;

