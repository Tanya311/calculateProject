// Файл form.js
'use strict';


  var PERCENT_OF_PROFIT = 0.1;
  var COST_OF_WORK_IN_HOUR = 350;
  var RENTAL_OF_WORK_IN_HOUR = 200;

  var priceOfHouseMap = {
    'oak': 65000,
    'pine': 20000,
    'ash': 50000,
    'larch': 20000,
    'nut': 80000
  };

  var priceOfPaintMap = {
    'paint1': 500,
    'paint2': 1000,
    'paint3': 2000,
    'paint4': 3000,
    'paint5': 3500
  };

  var priceOfCoatingMap = {
    'wax': 500,
    'oil': 1000,
    'lacquer': 2000,
  };

  var form = document.querySelector('.form')
  var woodSelect = form.querySelector('#wood')
  var paintSelect = form.querySelector('#paint')
  var coatingSelect = form.querySelector('#coating')
  var total = form.querySelector('#total')
  var amountOfMaterial = form.querySelector('#amount-of-material')
  var amountOfPaint = form.querySelector('#amount-of-paint')
  var amountOfCoating = form.querySelector('#amount-of-coating')
  var furniture = form.querySelector('#furniture')
  var totalButton = form.querySelector('.total-button')
  var numberOfHours = form.querySelector('#number-of-hours')
  var expendableMaterial = form.querySelector('#expendable-material')

  /**
   * @name getWoodAmountTotal
   * @description функция расчета стоимости дерева
   */
  var getWoodAmountTotal = function () {
    var woodAmountTotal = priceOfHouseMap[woodSelect.value] * amountOfMaterial.value;
    return woodAmountTotal;
  }

  /**
   * @name getPaintAmountTotal
   * @description функция расчета стоимости окрашивания
   */
  var getPaintAmountTotal = function () {
    var paintAmountTotal = priceOfPaintMap[paintSelect.value] * amountOfPaint.value;
    return paintAmountTotal;
  }

  /**
   * @name getCoatingAmountTotal
   * @description функция расчета стоимости покрытия после окрашивания
   */
  var getCoatingAmountTotal = function () {
    var coatingAmountTotal = priceOfCoatingMap[coatingSelect.value] * amountOfCoating.value;
    return coatingAmountTotal;
  }

  /**
   * @name getCostOfWork
   * @description функция расчета работы по часам
   */
  var getCostOfWork = function () {
    var hours = parseInt(numberOfHours.value, 10);
    var costOfWork = hours * COST_OF_WORK_IN_HOUR;
    return costOfWork;
  }

  /**
   * @name getCostOfRental
   * @description функция расчета аренды помещения по часам
   */
  var getCostOfRental = function () {
    var hours = parseInt(numberOfHours.value, 10);
    var costOfRental = hours * RENTAL_OF_WORK_IN_HOUR;
    return costOfRental;
  }

  /**
   * @name getMaterialAmountTotal
   * @description функция расчета стоимости материалов
   */
  var getMaterialAmountTotal = function () {
    var furnitureValue = parseInt(furniture.value, 10);
    var expendableMaterialValue = parseInt(expendableMaterial.value, 10);
    var materialAmountTotal = getWoodAmountTotal() + getPaintAmountTotal() + getCoatingAmountTotal() +  furnitureValue + expendableMaterialValue;
    return materialAmountTotal;
  }

  /**
   * @name getAmountTotal
   * @description функция расчета стоимости заказа
   */
  var getAmountTotal = function () {
    var amountTotal = getMaterialAmountTotal() + getCostOfWork() + getCostOfRental();
    return amountTotal;
  }

  /**
   * @name getAmountTotal
   * @description функция расчета стоимости заказа с приболью
   */
  var getAmountTotalWhithPercentOfProfit = function () {
    var amountTotalWhithPercentOfProfit = getAmountTotal() + getAmountTotal() * PERCENT_OF_PROFIT;
    return amountTotalWhithPercentOfProfit;
  }

  /**
   * @name totalButtonClickHandler
   * @description функция обработчик события
   */
  var totalButtonClickHandler = function(evt) {
    evt.preventDefault();
    total.value = getAmountTotalWhithPercentOfProfit();
  };

  totalButton.addEventListener('click', totalButtonClickHandler)

