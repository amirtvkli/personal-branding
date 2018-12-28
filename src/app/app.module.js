import { User } from './models/user';
import BioGrapy from './components/bio-grapy/bio-grapy.component';

let user = new User();

let bio = new BioGrapy({
   el: 'bio-grapy'
});

