import LinkedList from "../../src/linked-list";

(() => {

    const linkedList = new LinkedList<number>();

    console.log(linkedList);

    linkedList.add(100);
    linkedList.add(101);
    linkedList.add(102);

    console.log(linkedList);

    linkedList.forEach((item: number, index: number) => {
        console.log(index, item);
    });

    console.log(linkedList.find(101));

    linkedList.clear();

    console.log(linkedList);

})();
