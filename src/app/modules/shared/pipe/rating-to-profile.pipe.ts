import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingToProfile',
})
export class RatingToRiskProfilePipe implements PipeTransform {
  transform(value: string): string {
    let riskProfileRating: string = value;

    switch (value) {
      case '1':
        riskProfileRating = 'Defensive';
        break;
      case '2':
        riskProfileRating = 'Conservative';
        break;
      case '3':
        riskProfileRating = 'Balanced';
        break;
      case '4':
        riskProfileRating = 'Growth';
        break;
      case '5':
        riskProfileRating = 'Aggressive';
        break;
      default:
        break;
    }

    return riskProfileRating;
  }
}
