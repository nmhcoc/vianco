import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { ContactPage } from '../contact/contact';
import { CategoriesPage } from '../categories/categories';
import { HomePage } from '../home/home';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
