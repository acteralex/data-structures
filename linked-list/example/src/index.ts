import LinkedList from "../../src/linked-list";

(() => {

    const linkedList = new LinkedList<number>();

    console.log('Just was created:', linkedList);

    linkedList.add(100);
    linkedList.add(101);
    linkedList.add(102);

    console.log('Added 3 items:', linkedList);

    console.log('Size after added:', linkedList.size);

    linkedList.forEach((item: number, index: number) => {
        console.log('Foreach Item:', index, item);
    });

    console.log('Find element:', linkedList.find(101));

    linkedList.clear();

    console.log('After clear', linkedList);

    linkedList
        .add(1)
        .add(2)
        .add(3)
        .add(4);

    console.log('Added 4 items with chain', linkedList);

    linkedList.remove(3);

    console.log('After remove', linkedList);

})();
