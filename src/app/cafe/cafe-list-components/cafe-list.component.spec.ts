import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CafeListComponent} from './cafe-list.component';
import {CafeService} from '../service/cafe.service';
import {of} from 'rxjs';
import {Cafe} from '../model/Cafe';
import {HttpClientModule} from '@angular/common/http';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let cafeServiceSpy: jasmine.SpyObj<CafeService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CafeService', ['getCafes']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CafeListComponent],
      providers: [{provide: CafeService, useValue: spy}]
    });
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    cafeServiceSpy = TestBed.inject(CafeService) as jasmine.SpyObj<CafeService>;
  });
  it('should show a table with three rows plus the heading', () => {
    const cafes: Cafe[] = [
      new Cafe(1, 'Café Normal Juan', 'Blend', 'Bogota, Cundinamarca', 'sabor1',
        1850, 'https://example.com/cafe1.jpg'),
      new Cafe(2, 'Café Normal1', 'Origen', 'Bogota, Cundinamarca', 'sabor1',
        1700, 'https://example.com/cafe2.jpg'),
      new Cafe(3, 'Café Normal2', 'Blend', 'Bogota, Cundinamarca', 'sabor1',
        1600, 'https://example.com/cafe3.jpg'),
      new Cafe(4, 'Café Normal3', 'Blend', 'Bogota, Cundinamarca', 'sabor1',
        1600, 'https://example.com/cafe3.jpg'),
      new Cafe(5, 'Café Normal4', 'Blend', 'Bogota, Cundinamarca', 'sabor1',
        1600, 'https://example.com/cafe3.jpg'),
      new Cafe(6, 'Café Normal5', 'Blend', 'Bogota, Cundinamarca', 'sabor1',
        1600, 'https://example.com/cafe3.jpg'),
    ];
    cafeServiceSpy.getCafes.and.returnValue(of(cafes));
    fixture.detectChanges();
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });
});
