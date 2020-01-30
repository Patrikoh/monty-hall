const getRandomDoor = doors => {
    return doors[Math.floor(Math.random() * doors.length)]
};

const getAvailableDoors = (doors, selectedDoorId) => {
    return doors.filter(door => door.id !== selectedDoorId && !door.isOpen);
};

export const getRandomAvailableDoorId = (doors, selectedDoorId) => {
    const availableDoors = getAvailableDoors(doors, selectedDoorId);
    return getRandomDoor(availableDoors).id;
};

export const getRandomAvailableGoatDoorId = (doors, selectedDoorId) => {
    const availableGoatDoors = getAvailableDoors(doors, selectedDoorId).filter(door => !door.hasCar);
    return getRandomDoor(availableGoatDoors).id;
};

export const generateDoors = numberOfDoors => {
    const doorIdWithCar = Math.floor(Math.random() * numberOfDoors);
    let doors = [];
    for (let i = 0; i < numberOfDoors; i++) {
        doors.push({id: i, hasCar: doorIdWithCar === i, isOpen: false});
    }
    return doors;
};