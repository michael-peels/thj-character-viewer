package com.thj.charviewer.search.model;

import java.util.List;

public record CharacterSearchResults(int totalResults, List<CharacterSummary> searchResults) {

  public record CharacterSummary(int id, String name, Integer level, String playerClass) {
  }

}
