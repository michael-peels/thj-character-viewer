package com.thj.charviewer.search;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Component;

import com.thj.charviewer.classes.ClassResolver;
import com.thj.charviewer.search.model.CharacterSearchResults;
import com.thj.charviewer.search.model.CharacterSearchResults.CharacterSummary;

@Component
public class CharacterSearchResolver {
  private final NamedParameterJdbcTemplate template;
  private final RowMapper<CharacterSummary> mapper = new RowMapper<CharacterSummary>() {

    @Override
    public CharacterSummary mapRow(ResultSet rs, int rowNum) throws SQLException {
      return new CharacterSummary(
          rs.getString(1),
          rs.getInt(2),
          ClassResolver.resolve(rs.getInt(3)));
    }

  };

  public CharacterSearchResolver(final NamedParameterJdbcTemplate template) {
    this.template = template;
  }

  private static final String QUERY = """
      SELECT
        name,
        level,
        class
      FROM
        character_data
      WHERE
        name like :searchString
      ORDER BY
        name ASC
      OFFSET :offset ROWS FETCH FIRST :pageSize ROWS ONLY
            """;

  private static final String COUNT_QUERY = """
      SELECT
        count(*)
      FROM
        character_data
      WHERE
        name like :searchString
        """;

  public CharacterSearchResults resolve(final String searchString, final Pageable pageable) {
    SqlParameterSource namedParameters = new MapSqlParameterSource(
        Map.of(
            "searchString", withWildcards(searchString),
            "offset", pageable.getPageNumber() * pageable.getPageSize(),
            "pageSize", pageable.getPageSize()));
    List<CharacterSummary> characterSummaries = template.query(QUERY, namedParameters, mapper);
    Integer totalResults = template.queryForObject(COUNT_QUERY, namedParameters, Integer.class);
    return new CharacterSearchResults(totalResults, characterSummaries);
  }

  private String withWildcards(final String searchString) {
    return "%" + searchString + "%";
  }

}
