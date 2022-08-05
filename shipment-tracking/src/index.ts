import { Destination } from './Destination';
import { Cargo } from './Cargo';
import { TrackingMap } from './TrackingMap';

const destination = new Destination();
console.log(destination);

const cargo = new Cargo();
console.log(cargo);

const trackingMap = new TrackingMap('g-map');
trackingMap.attachMarker(destination);
trackingMap.attachMarker(cargo);
