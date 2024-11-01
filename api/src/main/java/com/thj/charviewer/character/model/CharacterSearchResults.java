package com.thj.charviewer.character.model;

import java.util.List;

public record CharacterSearchResults(int totalResults, List<CharacterSummary> searchResults) {

  public record CharacterSummary(String name, Integer level, String playerClass) {
  }

}
