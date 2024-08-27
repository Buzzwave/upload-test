export class FillFormHelper {
    static cities = ['London', 'New York', 'Tokyo', 'Paris', 'Berlin', 'Rome', 'Sydney', 'Moscow', 'Dubai', 'Toronto'];
    static kitchenObjectNames = ['Spoon', 'Fork', 'Knife', 'Plate', 'Bowl', 'Cup', 'Mug', 'Cutting Board', 'Peeler', 'Grater', 'Beer', 'Wine', 'Cocktail', 'Cheese', 'BBQ'];
    
    static randomCity() {
        return this.cities[Math.floor(Math.random() * this.cities.length)];
    }

    static randomKitchenObjectName(filter?: string) {
        return this.kitchenObjectNames.filter(x => x !== filter)[Math.floor(Math.random() * this.kitchenObjectNames.length - 1)];
    }
}