(function(){
	var app = angular.module('listApp', ['ui.mask'])

	.controller('listCtrl', function($scope, $window) {
		$scope.sortType = ''; //Сортировка по выбранному полю (name в данном случае)
		$scope.sortReverse = false; //Порядок сортировки
		$scope.searchName = ''; //Поиск по имени
		$scope.currentClient = -1; //Если запись не выбрана, то значение -1
		$scope.showPanel = false;
		$scope.message = "";
		$scope.heightTable = ($window.innerHeight / 2) + 'px'; //Вычисление высоты table (50% от высоты окна)

		//Функция добавления нового пользователя

		$scope.addClient = function() {
			if ($scope.name != '' && $scope.name != undefined) {
				var newPhone = addMaskPhone($scope.phone); //Добавление маски для телефона
				$scope.clients.push({
					id: $scope.clients.length,
					name: $scope.name,
					phone: newPhone,
					country: $scope.country
				});
			$scope.message = "Добавлена запись: " + $scope.name;
			$scope.name = ''; //
			$scope.phone = ''; //Очищение полей
			$scope.country = ''; //
			} else {
				$scope.message = "Поле ФИО обязательно для заполнения!";
			}
		}

		//Функция сохранения изменений

		$scope.saveChanges = function() {
			if($scope.currentClient > -1){
				var id = $scope.currentClient;
				$scope.clients[id].name = $scope.name;
				$scope.clients[id].phone = addMaskPhone($scope.phone);
				$scope.clients[id].country = $scope.country;
				$scope.name = '';
				$scope.phone = '';
				$scope.country = '';
				$scope.currentClient = -1;
				$scope.message = "Изменения сохранены";

			}
		}

		//Функция редактировании записи

		$scope.editClient = function(id) {
			$scope.showPanel = true;
			$scope.currentClient = id;
			$scope.name = $scope.clients[id].name;
			$scope.phone = $scope.clients[id].phone;
			$scope.country = $scope.clients[id].country;
		}

		//Функция удаления записи

		$scope.deleteClient = function(id) {
			for (var i = 0; i < $scope.clients.length; i++) {
				if($scope.clients[i].id == id) {
					$scope.message = "Удалена запись: " + $scope.clients[i].name;
					$scope.clients.splice(i, 1);
					break;
				}
			}
		}

		//Функция добавления маски +D-(DDD)-DDD-DD-DD

		addMaskPhone = function(tel) {
				if(tel != '' && $scope.phone != undefined) {
					var cleanPhone = tel.toString().trim().replace(/[^0-9]/gim,'');
					tel = '+' + cleanPhone.slice(0,1) + '-(' + cleanPhone.slice(1,4) + ')-' + cleanPhone.slice(4,7) + '-' + cleanPhone.slice(7,9) + '-' + cleanPhone.slice(9,11);
					return tel;
				}
				return tel = '';
		}

		$scope.clients = [
		  {
		  	id: 0,
		   	name: "Никонова Любовь Куприяновна",
		    phone: "+7-(899)-462-34-62",
		    country: "Россия"
		  },
		  {
		  	id: 1,
		   	name: "Тетерина Светлана Валерьяновна",
		    phone: "+1-(885)-547-24-91",
		    country: "Белоруссия"
		  },
		  {
		  	id: 2,
		   	name: "Матвеев Макар Олегович",
		    phone: "+7-(854)-580-24-24",
		    country: "Армения"
		  },
		  {
		  	id: 3,
		   	name: "Белозёрова Виктория Аркадьевна",
		    phone: "+7-(994)-435-00-41",
		    country: "Россия"
		  },
		  {
		  	id: 4,
		   	name: "Петров Николай Васильевич",
		    phone: "+7-(994)-536-33-48",
		    country: "Белоруссия"
		  },
		  {
		  	id: 5,
		   	name: "Рыбаков Андрей Христофорович",
		    phone: "+7-(906)-500-33-48",
		    country: "Россия"
		  },
		  {
		  	id: 6,
		   	name: "Костин Демьян Васильевич",
		    phone: "+7-(994)-536-33-48",
		    country: "Россия"
		  },
		  {
		  	id: 7,
		   	name: "Матвеев Федор Кондратович",
		    phone: "+7-(994)-536-33-48",
		    country: "Россия"
		  },
		  {
		  	id: 8,
		   	name: "Титов Никита Мстиславович",
		    phone: "+7-(994)-536-33-48",
		    country: "Германия"
		  },
		  {
		  	id: 9,
		   	name: "Бурова Светлана Альвиановна",
		    phone: "+7-(994)-536-33-48",
		    country: "Абхазия"
		  }

		];

		$scope.countries = [ 'Абхазия', 'Армения', 'Белоруссия', 'Германия ', 'Россия'];

	});



})();