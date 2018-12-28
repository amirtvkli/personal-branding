import { User } from './models/user';
import BioGrapy from './views/components/bio-grapy/bio-grapy.component';
import 'normalize.css';
import 'styles/_app.scss';

let user = new User();

let bio = new BioGrapy({
   el: 'bio-grapy'
});

