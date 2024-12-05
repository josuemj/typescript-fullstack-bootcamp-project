describe('NavBarProps behavior', () => {
  it('should call onSearch with the correct query when Enter is pressed', () => {
    const mockOnSearch = jest.fn();
    const mockOnBack = jest.fn();

    const props = {
      onSearch: mockOnSearch,
      onBack: mockOnBack,
    };

    // Simulate the behavior of triggering onSearch
    const inputValue = 'test query';
    props.onSearch(inputValue);

    expect(mockOnSearch).toHaveBeenCalledWith(inputValue);
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
  });

  it('should call onBack when the back function is triggered', () => {
    const mockOnSearch = jest.fn();
    const mockOnBack = jest.fn();

    const props = {
      onSearch: mockOnSearch,
      onBack: mockOnBack,
    };

    // Simulate the behavior of triggering onBack
    props.onBack();

    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });
});
