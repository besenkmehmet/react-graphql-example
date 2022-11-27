import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import ProfileRepositories from './ProfileRepositories';
import { userService } from '../services/userService';
import Repository from '../interfaces/repository';

describe('Header', () => {
  let repositories: Array<Repository> = [];
  beforeEach(async () => {
    const userName = '';
    repositories = await userService.fetchUserRepositories(userName, 'a');
    render(<ProfileRepositories userName={userName} />);
  });

  it('should render all repositories', () => {
    expect(screen.queryAllByTestId('repository-div').length).toBe(
      repositories.length
    );
  });
});
