import { faker } from "@faker-js/faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}


// https://maps.googleapis.com/maps/api/js?key=AIzaSyDBWdeNbUGBz9T6wfMfpf78yoD-kMas6Ic
