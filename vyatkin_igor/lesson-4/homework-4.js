       // Задание 1 функция преобразующая число в объект

        function convertNumInObject(number) {
            number = String(number);
            const numInObject = {};
            const arr = ['hundreds', 'tens', 'units'];

            if (number.length > 3)
                return console.log('Число превышает 999', numInObject);

            for (let i = 0; i < number.length; i++) {
                numInObject[arr[i]] = +number[i];
            }

            return console.log(numInObject);
        }

        convertNumInObject(456);
        convertNumInObject(3456);


        // Задание 2  интернет магазин, перенос функционала подсчета корзины в объект

        const basket = {

            shop: [
                {
                    cpu: "AMD Ryzen 5 Pinnacle Ridge",
                    price: 11990,
                    currency: "RUB",
                    amount: 2
                },
                {
                    motherboard: "GIGABYTE B450M DS3H",
                    price: 5390,
                    currency: "RUB",
                    amount: 2
                },
                {
                    gpu: "SAPPHIRE AMD Radeon RX 580",
                    price: 17990,
                    currency: "RUB",
                    amount: 2
                },
                {
                    ram: "CRUCIAL CT8G4DFS8266 DDR4 - 8Gb",
                    price: 2590,
                    currency: "RUB",
                    amount: 2
                },
                {
                    power: "SEASONIC FOCUS Plus SSR-550PX",
                    price: 9750,
                    currency: "RUB",
                    amount: 2
                },
                {
                    ssd: "KINGSTON A400 SA400S37",
                    price: 2590,
                    currency: "RUB",
                    amount: 2
                },
                {
                    monitor: "SAMSUNG C24RG50FQI 23.5",
                    price: 13990,
                    currency: "RUB",
                    amount: 2
                },
                {
                    case: "Midi-Tower ATX ZALMAN S2",
                    price: 2430,
                    currency: "RUB",
                    amount: 2
                },
            ],

            countBasketPrice: function (store) {

                let sumPrice = 0;

                for (let i = 0; i < Number(store.length); i++) {
                    sumPrice += Number(store[i].price) * Number(store[i].amount);
                }
                return sumPrice;
            },



            countBasketPrice2: function (store) {

                let sumPrice = 0;

                for (let i = 0; i < Number(this[store].length); i++) {
                    sumPrice += Number(this[store][i].price) * Number(this[store][i].amount);
                }
                return sumPrice;
            },


        };

        console.log('Стоимость корзины - ' + basket.countBasketPrice(basket.shop) + ' руб.');

        // Игорь, если не затруднит, в двух словах, объясните пожалуйста, почему ошибка "shop is not defined" при передаче аргумента shop в метод countBasketPrice2 (см. ниже) с конструкцией this внутри метода?
        // console.log(basket.countBasketPrice2(shop));





        // Задание 3

        /*
        Если я правильно понял условие задания, необходимо создать некую универсальную структуру интернет "гипермаркета" с разными отделами магазинами, в который можно добавлять, изменять, удалять магазины с товарами, работать с товарами. 
        
        Что пока получилось:
        1. На основе класса Store методом addUniversalBasketShops можно создать новый магазин с одним продуктом
        2. Поместить созданный магазин в наш "гипермаркет" universalBasket со структурой аналогичной заданию 2

        Что не получилось:
        1. Не знаю, каким методом добавить новый продукт в существующий уже магазин, чтобы он был того же класса Store
        */

        const universalBasket = {};


        class Store {
            constructor(productType, productName, productPrice, productAmount, productDimension) {
                this.productType = productType;
                this.productName = productName;
                this.productPrice = productPrice;
                this.productAmount = productAmount;
                this.producDimension = productDimension;
            }


            addUniversalBasketShops(shopName, shopProducts) {

                if (!universalBasket[shopName]) universalBasket[shopName] = [];
                universalBasket[shopName].push(shopProducts);

            }
        };

        const computerShop = new Store('CPU', 'AMD Ryzen 5 Pinnacle Ridge', 11990, 2, 'шт');
        computerShop.addUniversalBasketShops('computerShop', computerShop);

        const productsShop = new Store('Овощи', 'Помидоры', 150, 70, 'кг');
        productsShop.addUniversalBasketShops('productsShop', productsShop);

        const sportShop = new Store('Велосипеды', 'Track', 15000, 3, 'шт');
        sportShop.addUniversalBasketShops('sportShop', sportShop);

        console.log(universalBasket);
