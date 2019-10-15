import { ShortName } from './short-name.pipe';

let service = new ShortName();
describe('calculate', function() {
   it('add', function() {
     let name = 'Gizelly';

     name = service.shortName(name);
     expect(name).toBe('G');
   }); 
 });