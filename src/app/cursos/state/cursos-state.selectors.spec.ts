import * as fromCursosState from './cursos-state.reducer';
import { selectCursosStateState } from './cursos-state.selectors';

describe('CursosState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCursosStateState({
      [fromCursosState.cursosStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
