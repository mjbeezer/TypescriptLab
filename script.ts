export{};
//1
interface Mountain 
    {
        name: string;
        height: number;
    };

let Kilimanjaro: Mountain = 
    {
        name: "Kilimanjaro",
        height: 19341
    };

let Everest: Mountain = 
    {
        name: "Everest",
        height: 29029
    };

let Denali: Mountain = 
    {
        name: "Denali",
        height: 20310
    };

let mountains: Mountain[] = [Kilimanjaro, Everest, Denali];

function findNameOfTallestMountain(mtns: Mountain[])
    {
        let tallest: Mountain = mtns[0];
        for(let i: number = 0; i < mtns.length; i++)
        {
            if(tallest.height < mtns[i].height)
            {
                tallest = mtns[i];
            }
        }
        console.log(tallest.name)
    }

findNameOfTallestMountain(mountains);

//2
interface Product 
    {
        name: string;
        price: number;
    };

let Chips: Product = 
    {
        name: "Chips",
        price: 1.99
    };

let Soda: Product = 
    {
        name: "Soda",
        price: 1.99
    };

let Smokes: Product = 
    {
        name: "Smokes",
        price: 5.99
    };

let shopList: Product[] = [Chips, Soda, Smokes]

function calcAveragePruductPrice(items: Product[])
    {
        let total: number = 0;
        let avg: number = 0;

        for(let i:number = 0; i <shopList.length; i++)
        {
            total = items[i].price;
        }
        avg = total/items.length;
        console.log(avg);
    }

calcAveragePruductPrice(shopList);

interface InventoryItem
    {
        product: Product;
        quantity: number;
    };

let motor: Product =
    {
        name: "motor",
        price: 10
    };

let sensor: Product =
    {
        name: "sensor",
        price: 12.50
    };

let LED: Product =
    {
        name: "LED",
        price: 1
    };

let inventory : InventoryItem[] =
    [
        {product: motor, quantity: 10},
        {product: sensor, quantity: 4},
        {product: LED, quantity: 20}
    ];

function calcInventoryValue(inv: InventoryItem[])
    {
        let value: number = 0;
        for(let i:number = 0; i < inv.length; i++)
        {
            value += (inv[i].quantity * inv[i].product.price);
        }
        console.log(value);
    }

calcInventoryValue(inventory);