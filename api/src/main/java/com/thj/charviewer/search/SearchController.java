package com.thj.charviewer.search;

import org.springdoc.core.annotations.ParameterObject;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.thj.charviewer.search.model.CharacterSearchResults;

@RestController
@Cacheable("character-search")
@RequestMapping("/api/characters")
public class SearchController {

  private final CharacterSearchResolver resolver;

  public SearchController(CharacterSearchResolver resolver) {
    this.resolver = resolver;
  }

  @GetMapping
  public CharacterSearchResults findCharacters(@RequestParam("name") String name,
      @PageableDefault(25) @ParameterObject Pageable pageable) {
    return resolver.resolve(name, pageable);
  }

}
