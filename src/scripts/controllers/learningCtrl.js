app.controller("learningCtrl", ["$scope", "$timeout", "dragularService", function($scope, $timeout, dragularService){
  // Continue to quiz from the 'landingpage'
  $scope.continue = false;
  $scope.continueToQuiz = function(){
    $scope.continue = true;
  }
  $scope.totalPoints = 0;
  $scope.allDragged = 0;
  $scope.showTrueFalse = false;
  $scope.draggables = [
    { content: 'Accounts receivable' },
    { content: 'Inventory' },
    { content: 'Accounts payable' },
    { content: 'Advances received' }
  ];
  $scope.dragzone = [];
  $scope.questions = [
    {
      connectBlockAnswer: 'Accounts receivable',
      connectBlockText: 'Refers to the money our customers owe to us in exchange for the products and services we have sold and provided. They are funds which we have earned but not yet collected. They typically increase when the business grows.',
      trueFalseSection: [
        {
          questionText: 'Receivables are a result of timing difference between manufacturing the product or providing the service and receiving the compensation for that.',
          questionAnswerCorrect: 'This statement is true. This timing difference can be decreased by establishing shorter payment terms for our sales and partly offset by asking for down payment and progress payments from the customers.',
          value: true
        },
        {
          questionText: 'Improving the turnover of receivables (net sales divided by receivables) is always a good target. The amount of receivables can grow when the business grows but the turnover of receivables (Net sales divided by receivables ) should not be negatively affected.',
          questionAnswerCorrect: 'This statement is true. Proactive management of receivables, especially overdue receivables, is a good standard management practice. An increase in receivables can be a sign of relaxed sales terms, poor collection, or a higher risk of customer default. The challenge is to make sure the level of receivables is appropriate given the company\'s industry and competitive strategy.',
          value: true
        },
        {
          questionText: 'Accounts receivable can also be decreased by sending invoices late or providing aggressive cash discounts for quick payments.',
          questionAnswerCorrect: 'This statement is not true. In theory this results in smaller accounts receivable but sending invoices late or offering aggressive cash discounts is the wrong way to do it as it hurts both the cash flow and profitability of the company!',
          value: false
        }
      ]
    },
    {
      connectBlockAnswer: 'Inventory',
      connectBlockText: 'Refers to the quantity of goods and materials company has in stock. Inventory usually consists of four main elements: <span>\n• Raw Materials \n • and Components \n • Work-In-Process (WIP) \n • Finished Goods \n • Spare Parts and Consumables </span> \n Inventories tend to increase when business grows but the turnover of inventories (Net sales divided by inventories or Cost Of Goods Sold divided by inventories) should not be negatively affected.',
      trueFalseSection: [
        {
          questionText: 'A key reason for a company to keep inventories is to secure availability when own production or customers have a need. ',
          questionAnswerCorrect: 'This statement is true. Other reasons for a company to keep inventories are also to take advantage of economies of scale in purchasing, production and transportation. However, in order to avoid overstocking, we have to establish service levels which define how quickly we target to fulfill the needs of our customers and own production.',
          value: true
        },
        {
          questionText: 'One of the basic targets in inventory management is just-in-time arrival of raw material and components simultaneously securing the availability. ',
          questionAnswerCorrect: 'This statement is true. Other basic targets are shortest possible lead times from order to delivery and optimized levels of parts and finished goods inventories, while maintaining the targeted service levels, and minimal number of physical inventory locations while meeting the availability needs of the customers.',
          value: true
        },
        {
          questionText: 'The target should always be minimizing the inventory.',
          questionAnswerCorrect: 'This statement is not true. You should naturally minimize excess inventory. However, inventory is needed and the optimal level varies depending on e.g. the agreed service levels, the cost of procurement and the criticality of the components.',
          value: false
        }
      ]
    },
    {
      connectBlockAnswer: 'Accounts payable',
      connectBlockText: 'Represents the money we owe to our suppliers in exchange for material, components, services and various supplies received. They are the funds we owe but have not yet paid, and they typically increase as the business grows.',
      trueFalseSection: [
        {
          questionText: 'Payables have a major impact on Net Working Capital. ',
          questionAnswerCorrect: 'This statement is true. Payables have a major impact on NWC because the ability to negotiate long payment terms for all procured materials, components and services and to maintain high payables (without extra cost) can finance a considerable part of inventory. For example, if we are able to stretch out our payments to suppliers without cost (we pay invoices in 60 days rather than 30 without additional cost),  we can considerably decrease our working capital and thereby our bank debt.',
          value: true
        },
        {
          questionText: 'The goal in managing payables is to originally negotiate as long payment terms as possible provided that we don’t have to pay higher price for the purchases because of these longer payment terms.',
          questionAnswerCorrect: 'This statement is true. The longer the payment times are the bigger part of the inventories is financed by the suppliers. Long payment terms are always a sign of strong purchasing leverage.',
          value: true
        },
        {
          questionText: 'Extending payment times by delaying the payments beyond due dates is good management practice. ',
          questionAnswerCorrect: 'This statement is not true. Extending payment times by delaying the payments beyond due dates may lead to paying high interest costs on late payments and deterioration of your supplier relationship.',
          value: false
        }
      ]
    },
    {
      connectBlockAnswer: 'Advances received',
      connectBlockText: 'Represents the money we have received in advance from our customer in exchange for the products and services we have committed to deliver. They are funds we have received but not yet earned.',
      trueFalseSection: [
        {
          questionText: 'Advances are used to cover the financing recuirements of a delivery and potential default risk of the customer.',
          questionAnswerCorrect: 'This statement is true. Advances received are a way to help the company (supplier) to finance the capital tied to Work-In-Process (WIP) in project deliveries, which are typically far customized. Furthermore, especially in large projects which have a long lead time, the circumstances of the project or the buyer can change and it is important that we as the supplier secured our position throughout the project.',
          value: true
        },
        {
          questionText: 'Company\'s basic principle is to ask for down payments only with large projects.',
          questionAnswerCorrect: 'This statement is not true. Asking for down payments is important also with smaller deliveries especially when talking about customized solutions.',
          value: true
        },
        {
          questionText: 'Advances received decrease the need for other collaterals/guarantees.',
          questionAnswerCorrect: 'This statement is true. Advances received also considerably decrease company\'s risk as the supplier in case of a default by our customer.',
          value: false
        }
      ]
    },
  ];

  $timeout(function(){
    var maincontainer = document.getElementById('main_container');
    var dropzones = document.querySelectorAll('.dragged');
    var draggables = maincontainer.children[4]; // this is the '.answer_blocks' div.
    // Making namespaces to corresponding dragging spots. There could be more sophisticated ways to create this.
    dragularService([dropzones[0],draggables.children[0]], {
      nameSpace: 'receivable',
      scope: $scope,
      revertOnSpill: true
     });
    dragularService([dropzones[1],draggables.children[1]], {
      nameSpace: 'inventory',
      scope: $scope,
      revertOnSpill: true
    });
    dragularService([dropzones[2],draggables.children[2]], {
      nameSpace: 'payable',
      scope: $scope,
      revertOnSpill: true
    });
    dragularService([dropzones[3],draggables.children[3]], {
      nameSpace: 'advanced',
      scope: $scope,
      revertOnSpill: true
    });
  }, 0);
  // Firing a barrage of questions upon successful drop
  $scope.$on('dragulardrop', shootQuestion('drop'));

  var questionsLength;

  function shootQuestion() {
   return function() {
     for(var i=0; i<$scope.questions.length; i++) {
       var dropped = arguments[2].innerText.replace(/\s+/g, '').toLowerCase();
       var answer = $scope.questions[i].connectBlockAnswer.replace(/\s+/g, '').toLowerCase();
       if (dropped == answer){ // Checking if the dropped innerText value is the same as in the object
         $scope.trueFalses = $scope.questions[i].trueFalseSection; // If successful, we'll put true-false-questions from that object to an array.
         questionsLength = $scope.questions[i].trueFalseSection.length;
         $timeout(function () {
           $scope.showTrueFalse = true; // we'll show the modal, where true-false-questions are asked.
           $scope.index = 0;
           $scope.totalPoints += 1;
           $scope.allDragged += 1;
         }, 0);
         console.log($scope.questions[i].trueFalseSection);
       }
     }
   };
  }
  // Scoring system for the true-false-section.
 $scope.checkAnswer = function(value, questions){
    if(value == questions){
      $scope.totalPoints += 1;
      $scope.yourAnswer = "Correct!";
    }else{
      $scope.yourAnswer = "Incorrect.";
    }
    $scope.showAnswer = true;
  };

 $scope.nextQuestion = function(){
    $scope.index += 1;
    $scope.showAnswer = false;
    if($scope.index >= questionsLength){ // when the array is finished (index exceeds the array length value)...
      $scope.showTrueFalse = false; //...we'll hide the modal.
      if($scope.allDragged == 4){ // when all elements are dragged, quiz is over and final scores are shown.
        $scope.quizOver = true;
      }
    }
  };


}]);
