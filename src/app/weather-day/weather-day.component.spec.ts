import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDayComponent } from './weather-day.component';

describe('WeatherDayComponent', () => {
  let component: WeatherDayComponent;
  let fixture: ComponentFixture<WeatherDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDayComponent);
    component = fixture.componentInstance;
    component.day = {key:'foo', value:[{
        "dt":1406106000,
        "main":{
            "temp":298.77,
            "temp_min":298.77,
            "temp_max":298.774,
            "pressure":1005.93,
            "sea_level":1018.18,
            "grnd_level":1005.93,
            "humidity":87,
            "temp_kf":0.26},
        "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
        "clouds":{"all":88},
        "wind":{"speed":5.71,"deg":229.501},
        "sys":{"pod":"d"},
        "dt_txt":"2014-07-23 09:00:00"}]};

    fixture.detectChanges();
  });

  it('should display the correct day', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('foo');
  });

  it('should display the correct image', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').getAttribute("src")).toEqual('http://openweathermap.org/img/w/04d.png');
  });

  it('should display the correct temperatures', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('298.774°C');
  });
});
