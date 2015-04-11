app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();
  $scope.sort = "price";

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'House Sirloin',
      description: 'A petite version of our classic sirloin. Served with seasonal vegetables and your choice of garlic mashed potatoes or baked potato.',
      price: 13.95
    },
    {
      name: 'Steakhouse Bruschetta Sirloin',
      description: 'Chunky Roma pepper relish is piled over our 7 oz. sirloin. Served with red potatoes and a grilled portobello mushroom cap stuffed with a creamy artichoke cheese spread.',
      price: 12.95
    },
    {
      name: 'Bourbon Street Steak',
      description: 'A juicy, tender 9 oz. steak jazzed up with Cajun spices. Served with sautéed onions & mushrooms and crispy red potatoes.',
      price: 15.95
    }
  ];
  $scope.extras = [
    {
      name: 'Blue Ribbon Brownie',
      description: 'Super moist with chunks of dark chocolate, nuts and hot fudge. Big enough to share, served with two scoops of vanilla ice cream.',
      price: 4.95
    },
    {
      name: 'Strawberry Cheesecake Dessert Shooter',
      description: 'Classic cheesecake, graham cracker crumbs, strawberry sauce and whipped cream make this one to savor.',
      price: 5.95
    },
    {
      name: 'Chocolate Mousse Dessert Shooter',
      description: 'Decadent Oreo cookie pieces, chocolate mousse and whipped cream make this a rich and creamy treat.',
      price: 6.95
    }
  ];

}]);