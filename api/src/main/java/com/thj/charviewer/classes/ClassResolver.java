package com.thj.charviewer.classes;

import java.util.HashMap;
import java.util.Map;

public class ClassResolver {
  private static Map<Integer, String> classMap = new HashMap<>();
  static {
    classMap.put(1, "Warrior");
    classMap.put(2, "Cleric");
    classMap.put(3, "Paladin");
    classMap.put(4, "Ranger");
    classMap.put(5, "ShadowKnight");
    classMap.put(6, "Druid");
    classMap.put(7, "Monk");
    classMap.put(8, "Bard");
    classMap.put(9, "Rogue");
    classMap.put(10, "Shaman");
    classMap.put(11, "Necromancer");
    classMap.put(12, "Wizard");
    classMap.put(13, "Magician");
    classMap.put(14, "Enchanter");
    classMap.put(15, "Beastlord");
    classMap.put(16, "Berserker");
  }

  private ClassResolver() {
  }

  public static String resolve(Integer classId) {
    return classMap.get(classId);
  }

}
