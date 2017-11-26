import LinkedList from "../../src/linked-list";

(() => {

    const linkedList = new LinkedList<number>();

    console.log(linkedList);

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    console.log(linkedList);

    linkedList.clear();

    console.log(linkedList);

})();
